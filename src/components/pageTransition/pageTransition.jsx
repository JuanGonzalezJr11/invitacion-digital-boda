import './pageTransition.scss';
import { AnimatePresence, motion } from 'framer-motion';

const PageTransition = ({children, type}) => {
    return (
        type === 'up' ? 
        <div>
            <AnimatePresence>
                <motion.div initial={{opacity: 0, y: '100vh'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '100vh'}} transition={{duration: 1.75}} style={{position: 'absolute', width: '100%', height: '100%'}} >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
        :
        <div>
            {/* style={{position: 'absolute', width: '100%', height: '100%'}} */}
            <AnimatePresence>
                <motion.div initial={{opacity: 0, y: '-100vh'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '-100vh'}} transition={{duration: 1.75}} style={{position: 'absolute'}}>
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default PageTransition;