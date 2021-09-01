import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import classes from "./LazyLoading.module.css";
const LazyLoading = () => {
    return (
        <div className={classes.lazy}>
            <Loader
                type="Circles"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} 
            />
        </div>
      
    );
  }


export default LazyLoading;