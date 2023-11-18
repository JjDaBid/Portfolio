import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../styles";
import { web, } from "../../assets";

// eslint-disable-next-line react/prop-types
const ButtonList = ({standards, filterStandard}) => {

  return (
    <>
      <div>
        <motion.div variants={textVariant()}>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-6 text-secondary text-[17px] max-w-3xl leading-[30px] bg-black'
          >
      
          </motion.p>       
          <h2 className={`${styles.sectionHeadText} text-center bg-black`}>Estándares</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center text-light my-10 gap-10 bg-black">
          {standards.map((standar) => ( 
          <>
            <Tilt className='xs:w-[250px] w-full items-center' key={standar}>
              <motion.div
                variants={fadeIn("right", "spring", 0.75)}
                className='w-full red-gray-gradient p-[1px] rounded-[20px] shadow-card'>
                <button
                  key={standar}  
                  // eslint-disable-next-line react/no-unknown-property
                  options={{ max: 45, scale: 1, speed: 450 }}
                  className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[220px] flex justify-evenly items-center flex-col w-100 text-white text-[20px] font-bold text-center' 
                  type="button"                  
                  onClick={() => filterStandard(standar)}>
                  <img
                    src={web}
                    alt='web-development'
                    className='w-16 h-16 object-contain'/>
                  {standar}
                </button>
              </motion.div>
            </Tilt>
          </>       

          ))}
        </div>


      </div>
    
    </>
  )
}

export { ButtonList } 
