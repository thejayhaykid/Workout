import { useAuth } from '@redwoodjs/auth';

const NavbarLayout = () => {
  const { logIn, logOut, isAuthenticated } = useAuth();

  return (
    <>
      <button onClick={isAuthenticated ? logOut : logIn}>
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
    </>
  );
};

export default NavbarLayout;
