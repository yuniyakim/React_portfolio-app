import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './Content.scss';
import sofa from '../assets/images/sofa.png';
import keyboard from '../assets/images/keyboard.png';
import workmedia from '../assets/images/workmedia.png';
import dddone from '../assets/images/dddone.png';
import abstract from '../assets/images/abstract.png';
import handp from '../assets/images/handp.png';
import architect from '../assets/images/architect.png';
import calc from '../assets/images/calc.png';
import sport from '../assets/images/sport.png';
import {FormControl} from "@mui/material";

const categories = ['Show All', 'Design', 'Branding', 'Illustration', 'Motion'];

let initialPictures = [
  { 'id': 0, 'name': 'SOFA', 'category': 'Design', 'source': sofa},
  { 'id': 1, 'name': 'KeyBoard', 'category': 'Branding', 'source': keyboard},
  { 'id': 2, 'name': 'Work Media', 'category': 'Illustration', 'source': workmedia},
  { 'id': 3, 'name': 'DDDone', 'category': 'Motion', 'source': dddone},
  { 'id': 4, 'name': 'Abstract', 'category': 'Design', 'source': abstract},
  { 'id': 5, 'name': 'HandP', 'category': 'Branding', 'source': handp},
  { 'id': 6, 'name': 'Architect', 'category': 'Motion', 'source': architect},
  { 'id': 7, 'name': 'CalC', 'category': 'Design', 'source': calc},
  { 'id': 8, 'name': 'Sport', 'category': 'Branding', 'source': sport},
]

type IContentProps = {
  pictures: {id: number, name: string, category: string, source: string}[],
  setPictures: React.Dispatch<React.SetStateAction<{id: number, name: string, category: string, source: string}[]>>,
  selectedCategory: string,
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>,
  picturesOrder: React.MutableRefObject<number>
};

const Content = () => {
  const isDesktop = useMediaQuery({query: '(min-width: 1040px)'});
  const isMobile = useMediaQuery({query: '(max-width: 1040px)'});
  const [pictures, setPictures] = useState(initialPictures);
  const [selectedCategory, setSelectedCategory] = useState('Show All');
  const picturesOrder = useRef(1);

  return (
    <div>
      {isDesktop && <ContentDesktop
        pictures={pictures}
        setPictures={setPictures}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        picturesOrder={picturesOrder}
      />}
      {isMobile && <ContentMobile
        pictures={pictures}
        setPictures={setPictures}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        picturesOrder={picturesOrder}
      />}
    </div>
  );
}

const PictureItem = (props: {id: number, name: string, category: string, source: string, isSelected?: boolean, isHidden: boolean,
  onClick?: (selectedId: number) => void, onCategoryClick: (selectedCategory: string) => void}) => {
  let className = 'picture';
  if (props.isSelected !== undefined) {
    className = props.isSelected ? className + ' picture_selected' : className;
  }
  className = props.isHidden ? className + ' picture_hidden' : className;

  return (
    <div className={className} onClick={() => {
      if (props.onClick !== undefined) {
        props.onClick(props.id);
      }
    }}>
      <img className="picture__image" src={props.source} alt={`image_${props.id}`} />
      <div className="picture__category" onClick={() => props.onCategoryClick(props.category)}>{props.category}</div>
      <div className="picture__name">{props.name}</div>
    </div>
  )
}

const loadMore = (pictures: {id: number, name: string, category: string, source: string}[],
  setPictures: React.Dispatch<React.SetStateAction<{id: number, name: string, category: string, source: string}[]>>,
                  picturesOrder: React.MutableRefObject<number>) => {
  let newPictures = structuredClone(pictures);
  let nextPictureId = pictures.length !== 0 ? Math.max(...pictures.map(picture => picture.id)) + 1 : 0;
  picturesOrder.current += 1;
  initialPictures.forEach(picture => {
    let newPicture = structuredClone(picture);
    newPicture.id = nextPictureId;
    newPicture.name += `_${picturesOrder.current}`;
    newPictures.push(newPicture);
    nextPictureId += 1;
  });
  setPictures(newPictures);
}

const ContentDesktop: FC<IContentProps> = ({pictures, setPictures, selectedCategory,
  setSelectedCategory, picturesOrder}) => {
  const [selectedPicture, setSelectedPicture] = useState(-1);

  const checkKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Delete' && selectedPicture !== -1) {
      setPictures(p => p.filter(picture => picture.id !== selectedPicture));
      setSelectedPicture(-1);
    }
  },[selectedPicture]);

  useEffect(() => {
    window.addEventListener("keydown", checkKeyPress);
    return () => {
      window.removeEventListener("keydown", checkKeyPress);
    };
  }, [checkKeyPress]);

  useEffect(() => {
    // Remove picture selection after selecting category
    setSelectedPicture(-1);
  }, [selectedCategory]);

  const selectPicture = (selectedId: number) => {
    if (selectedId === selectedPicture) {
      setSelectedPicture(-1);
    } else {
      setSelectedPicture(selectedId);
    }
  }

  const categoriesItems = categories.map(category => {
    const className = category === selectedCategory ? 'category category_selected' : 'category';
    return <div className={className} onClick={() => setSelectedCategory(category)} key={`category_${category}`}>{category}</div>
  })

  const pictureItems = pictures.map(picture => {
    return (
      <PictureItem
        id={picture.id}
        name={picture.name}
        category={picture.category}
        source={picture.source}
        isSelected={selectedPicture === picture.id}
        isHidden={selectedCategory !== 'Show All' && picture.category !== selectedCategory}
        onClick={selectPicture}
        onCategoryClick={setSelectedCategory}
        key={`picture_${picture.id}`}
    />)
  })

  return (
    <div className="content">
      <div className="categories_desktop">
        {categoriesItems}
      </div>
      <div className="pictures_desktop">
        {pictureItems}
      </div>
      <div className="button" onClick={() => loadMore(pictures, setPictures, picturesOrder)}>
        LOAD MORE
      </div>
    </div>
  );
}

const ContentMobile: FC<IContentProps> = ({pictures, setPictures, selectedCategory,
                                            setSelectedCategory, picturesOrder}) => {

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  const pictureItems = pictures.map(picture => {
    return (
      <PictureItem
        id={picture.id}
        name={picture.name}
        category={picture.category}
        source={picture.source}
        isHidden={selectedCategory !== 'Show All' && picture.category !== selectedCategory}
        onCategoryClick={setSelectedCategory}
        key={`picture_${picture.id}`}
      />)
  })

  return (
    <div className="content">
      <FormControl className="categories_mobile">
        <Select
            className="categories__select"
            value={selectedCategory}
            onChange={handleChange}
            displayEmpty
            inputProps={{
              'aria-label': 'Without label'
            }}
          >
            {categories.map(category => <MenuItem value={category} key={`category_${category}`}>{category}</MenuItem>)}
        </Select>
      </FormControl>
      <div className="pictures_mobile">
        {pictureItems}
      </div>
      <div className="button" onClick={() => loadMore(pictures, setPictures, picturesOrder)}>
        LOAD MORE
      </div>
    </div>
  );
}

export default Content;