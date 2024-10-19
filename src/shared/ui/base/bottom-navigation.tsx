import { NavLink } from 'react-router-dom';
import Container from '@/shared/ui/wrappers/container.tsx';
import { NAVIGATION } from '@/shared/constants/navigation.tsx';

const BottomNavigation = () => {
  return (
    <aside className="fixed bottom-0 left-0 w-full px-1 py-2.5 border-t border-t-primary/50 bg-muted/95 rounded-t-xl shadow-2xl shadow-primary backdrop-blur-sm z-50">
      <Container className="flex items-center justify-between">
        {NAVIGATION.map(({ label, path, icon, styles }, index) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive, isPending }) =>
              `w-full flex flex-col justify-center transition-colors items-center
                ${isPending ? 'pending' : isActive ? styles.active : styles.common}
                ${index > 0 && 'border-l'}`
            }
          >
            {icon}
          </NavLink>
        ))}
      </Container>
    </aside>
  );
};

export default BottomNavigation;
