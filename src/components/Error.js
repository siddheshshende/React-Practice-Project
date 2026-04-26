import { useRouteError, useNavigate } from "react-router-dom";


const Error = () => {
  const err = useRouteError();
  const navigate = useNavigate();
 
  return (
    <section>
      <div className="error-page">
        <div className="content">
          <h1>{err?.status || 404}</h1>
          <h2>Oops, Page not found!</h2>

          <p>
            The page you are looking for might have been moved, deleted, or does
            not exist.
          </p>

          <p>Sorry for the Inconvenience.</p>
          <div className="btns">
            <button className="fill" onClick={() => navigate(-1)}>
              Go back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
