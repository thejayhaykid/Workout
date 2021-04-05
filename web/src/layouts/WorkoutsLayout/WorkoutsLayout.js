import { Link, routes } from '@redwoodjs/router';
import { Toaster } from '@redwoodjs/web/toast';
import { useAuth } from '@redwoodjs/auth';

const WorkoutsLayout = (props) => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.workouts()} className="rw-link">
            Workouts
          </Link>
        </h1>
        {isAuthenticated ? (
          <Link to={routes.newWorkout()} className="rw-button rw-button-green">
            <div className="rw-button-icon">+</div> New Workout
          </Link>
        ) : null}
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  );
};

export default WorkoutsLayout;
