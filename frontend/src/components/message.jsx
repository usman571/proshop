const Message = ({ variant, children }) => {
    // Map variant to Tailwind CSS classes
    const variantClasses = {
      info: 'bg-blue-500 text-white',
      success: 'bg-green-500 text-white',
      warning: 'bg-yellow-500 text-white',
      error: 'bg-red-500 text-white',
    };
  
    // Default to 'info' variant if not provided
    const classes = variantClasses[variant] || variantClasses['info'];
  
    return (
      <div className={`px-4 py-2 rounded-md ${classes}`}>
        {children}
      </div>
    );
  };
  
  Message.defaultProps = {
    variant: 'info',
  };
  
  export default Message;
  