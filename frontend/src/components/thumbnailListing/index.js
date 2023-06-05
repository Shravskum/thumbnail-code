import React, {useState} from 'react';

const displayCount = 4;

const ThumbnailListing = (props) => {
	const {data, selectedThumb, onThumbSelected} = props;
	const [slideIndex, setSlideIndex] = useState(0);
	const totalPages = Math.ceil(data.length / displayCount);

	const displayedItems = data.slice(
		slideIndex * displayCount,
		(slideIndex + 1) * displayCount
	);
	
	const handleNext = (evt) => {
		if(evt.currentTarget.classList.contains('disabled'))
			return false;
		setSlideIndex((prevIndex) => prevIndex + 1);
	};

	const handlePrev = (evt) => {
		if(evt.currentTarget.classList.contains('disabled'))
			return false;
		setSlideIndex((prevIndex) => prevIndex - 1);
	};
    return (
        <div class="thumbnails">
			<div class="group"
			>
				{
					displayedItems.map((item) => (
						<a className={selectedThumb.id === item.id ? 'active' : ''} href="javascript:void(0)" title={item.id} onClick={()=>onThumbSelected(item)}>
							<img src={`images/thumbnails/${item.thumbnail}`} alt={`${item.id}-m`} width="145" height="121" />
							<span>{item.id}</span>
						</a>
					))
				}
			</div>
			<a href="javascript:void(0)" className={`previous ${slideIndex === 0 ? 'disabled' : ''}`} title="Previous" onClick={handlePrev}>Previous</a>
			<a href="javascript:void(0)" className={`next ${slideIndex === totalPages - 1 ? 'disabled' : ''}`} title="Next" onClick={handleNext}>Next</a>
		</div>
    )
}

export default ThumbnailListing;