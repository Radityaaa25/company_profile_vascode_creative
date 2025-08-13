import './shiny.css';

const ShinyText = ({ children, className }) => {
  return (
    <div className={`${className} shiny-text`}>
      {children}
    </div>
  );
};

export default ShinyText;