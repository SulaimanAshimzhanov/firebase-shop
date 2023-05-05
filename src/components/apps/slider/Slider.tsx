
import React from 'react';
import classNames from 'classnames';
import { 
          collection, 
          deleteDoc, 
          getDocs, 
          query 
       } from 'firebase/firestore';
import { toast } from 'react-toastify';

import DotsSlider from '../dotsSlider/DotsSlider';
import SliderButton from '../form/sliderButton/SliderButton';
import { db, firestoreDoc } from '../../../firebase/firebase';
import { Providers } from '../../../providers';
import { Components } from '..';

import cls from "./index.module.scss";

interface ISlider {
  isAdmin: boolean
};


const Slider: React.FunctionComponent<ISlider> = ({isAdmin}) => {
  const [currentSlider, setCurrentSlider] = React.useState(1);
  const [slideData, setSlideData] = React.useState<any>([]);
  const { render, setRender } = Providers.useAuth();
  const notifyErrorSlide = () => toast("Cannot delete the last slide!", {className: "danger_toast"});

  async function getCollections() {
    const sliders: any = query(collection(db, "sliders"));
    const queryDocs = await getDocs(sliders);
    
    setSlideData(queryDocs.docChanges());
  }

  React.useEffect(() => {
    getCollections();
  }, [render]);


  const deleteSlide = async () => {
    const foundedDoc = slideData?.find((el: any) => currentSlider === el.newIndex + 1);

    const deleteDocId = foundedDoc.doc?.id;

    if(slideData.length !== 1) {
      if(deleteDocId) {
        await deleteDoc(firestoreDoc(db, "sliders", deleteDocId));
        setRender(`Deleted ${deleteDocId}`);
      };
    } else {
      notifyErrorSlide()
    }

  };


  const nextSlide = () => {
    if(slideData?.length !== 0) {
      if(currentSlider !== slideData.length) {
        setCurrentSlider(currentSlider + 1)
      } else {
        setCurrentSlider(1)
      }
    };
  };


  const prevSlide = () => {
    if(slideData?.length !== 0) {
      if(currentSlider > 1) {
        setCurrentSlider(currentSlider - 1)
      } else {
        setCurrentSlider(slideData.length)
      }
    };
  };



  // setTimeout(() => {
  //   if(currentSlider !== LIST.SliderList.length - 1) {
  //     setCurrentSlider(currentSlider + 1)
  //   } else {
  //     setCurrentSlider(0)
  //   }
  // }, 2000);
  

  return (
    <div className={cls.slider_parent}>
      <div className={cls.slider_parent_container}>
        {
          slideData?.length === 0 && <Components.Loader fullHeight='100%'/>
        }

        {slideData.map((item: any, index: any) => (
          <div 
              className={currentSlider === index + 1 ? classNames(cls.slider_item, cls.activeSlider) : cls.slider_item}
              key={index}
              style={{background: `url("${item.doc.data().image}") center / cover`}}
          >
            <SliderButton direct="left" handleClick={prevSlide}/>
            <SliderButton direct="right" handleClick={nextSlide}/>
          </div>
        ))}

        {
          isAdmin && (
            <React.Fragment>
              {
                slideData.length !== 0 && (
                  <div className={cls.edit_button}>
                    <button onClick={deleteSlide}>Delete slide</button>
                  </div>
                )
              }
            </React.Fragment>
          )
        }
      </div>

      <div className={cls.slider_parent_dots}>
        {Array.from({length: slideData.length}).map((item, index) => 
          <DotsSlider currentSlider={currentSlider} dotIndex={index} key={index}/>
        )}
      </div>
    </div>
  )
}

export default Slider;
