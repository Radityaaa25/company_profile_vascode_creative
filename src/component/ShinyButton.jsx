import './shinyButton.css';

const ShinyButton = ({ href, children, className }) => {
  return (
    <a href={href} className={`${className} shiny-button`}>
      {children}
    </a>
  );
};

export default ShinyButton;