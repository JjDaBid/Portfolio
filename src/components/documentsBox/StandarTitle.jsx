import { styles } from "../../styles";

// eslint-disable-next-line react/prop-types
const StandarTitle = ({standar}) => {
  return (
    <div className='card card-body bg-black text-light'>
      <h3 className={`${styles.sectionHeadText} text-center`}>{standar}</h3>
    
    </div>
  )
}
    
export { StandarTitle }