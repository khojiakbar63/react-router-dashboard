import './style.scss'

const index = ({type, placeholder, className, value, onChange}) => {
    return (
       <input value={value} onChange={(e)=>onChange(e.target.value)} className={className ? className : ''} type={type ? type : 'text'} placeholder={placeholder ? placeholder : ''} />
    );
};

export default index;