import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';
import React, { Context, createContext, useState } from 'react';
import { Button } from '@/shared/ui/button.tsx';

type Props = {
  steps: React.ComponentType<any>[];
  labels?: {
    firstBtnText: string;
    nextBtnText: string;
    prevBtnText: string;
    finishBtnText: string;
  };
  finishAction: () => void;
  customize?: boolean;
};

export const StepperContext: Context<any> = createContext(undefined);

const Stepper = ({ customize = false, steps, labels, finishAction }: Props) => {
  const [step, setStep] = useState<number>(1);
  const [lastAction, setLastAction] = useState<string>('');

  if (steps?.length === 0 || !steps) return null;

  const nextStep = (): void => {
    if (step < steps?.length) {
      setStep((prevState: number) => prevState + 1);
      setLastAction('next');
    } else {
      if (finishAction) finishAction();
    }
  };
  const prevStep = (): void => {
    if (step > 1) setStep((prevState: number) => prevState - 1);
    setLastAction('back');
  };
  const skip = () => {
    setStep(+steps?.length);
    setLastAction('skip');
  };

  return (
    <StepperContext.Provider
      value={{
        nextStep,
        prevStep,
        lastAction,
        skip,
        step,
        length: steps?.length,
      }}
    >
      <div className="h-[calc(100vh-150px)]">
        {!customize && (
          <div className="flex items-center gap-1 opacity-75 my-5">
            {steps.map((_, index) => (
              <span
                onClick={() => setStep(index + 1)}
                className={`block w-full p-1 rounded-2xl transition-colors ${step < index + 1 ? 'bg-secondary' : step === index + 1 ? 'bg-muted-foreground' : 'bg-primary'}`}
                key={index}
              />
            ))}
          </div>
        )}

        <Accordion
          className="h-full"
          value={String(step)}
          type="single"
          collapsible
        >
          {steps?.map((Component, index) => (
            <AccordionItem
              className="border-b-0 bg-background"
              key={index}
              value={String(index + 1)}
            >
              <AccordionTrigger className="hidden">
                Step {index + 1}
              </AccordionTrigger>
              <AccordionContent>
                <Component />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {!customize && (
          <div className="flex justify-between items-center my-5">
            {step > 1 && (
              <Button size="lg" variant="link" onClick={prevStep}>
                {labels?.prevBtnText || 'Назад'}
              </Button>
            )}
            <Button className="ms-auto" size="lg" onClick={nextStep}>
              {step === 1
                ? labels?.firstBtnText || 'Далее'
                : step < steps?.length
                  ? labels?.nextBtnText || 'Далее'
                  : labels?.finishBtnText || 'Войти'}
            </Button>
          </div>
        )}
      </div>
    </StepperContext.Provider>
  );
};

export default Stepper;
