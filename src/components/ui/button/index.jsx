import './style.scss'

const index = ({className, fun, text, type, children}) => {
    return (
        <button onClick={()=> fun && fun()} type={type ? type : 'button'} className={className ? className : ''}>
            { text ? text : (children ? children : 'Button') }
        </button>
    );
};

export default index;