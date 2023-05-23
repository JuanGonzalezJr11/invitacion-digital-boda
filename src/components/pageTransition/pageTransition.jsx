import './pageTransition.scss';
import { AnimatePresence, motion } from 'framer-motion';

const PageTransition = ({children, type}) => {
    return (
        type === 'presentation' ? 
        <div>
            <AnimatePresence>
                <motion.div initial={{opacity: 0, y: '100vh'}} exit={{opacity: 0, y: '-100vh'}} animate={{opacity: 1, y: 0}} transition={{duration: 1.75}} style={{position: 'absolute', width: '100%', height: '100%'}} >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
        :
        <div>
            <AnimatePresence>
                <motion.div initial={{opacity: 0, y: '100vh'}} animate={{opacity: 1, y: 0}} transition={{duration: 1.75}} style={{position: 'absolute', width: '100%', height: '100%'}}>
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default PageTransition;