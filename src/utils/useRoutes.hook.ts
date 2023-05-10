import { useLocation, useNavigate } from 'react-router-dom';

export const useRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname;

  const goTo = (route: string) => {
    navigate(route, { state: { from: location } });
    window.location.reload();
  };

  return { from, goTo };
};
