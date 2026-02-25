import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

/**
 * Layout principal que envuelve el contenido con la barra de navegación inferior.
 * @returns {JSX.Element} Elemento JSX del componente Layout.
 */
function Layout() {
  return (
    <>
      <main className="pb-bottom-nav">
        <Outlet />
      </main>
      <BottomNav />
    </>
  );
}

export default Layout;
