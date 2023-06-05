import React from 'react';

const ThumbnailPreview = (props) => {
	const {selectedThumb} = props;
    return (
        <div id="large">
			<div class="group">
				<img src={`/images/large/${selectedThumb.image}`} alt="Large" width="430" height="360" />
				<div class="details">
					<p><strong>Title</strong> {selectedThumb.title}</p>
					<p><strong>Description</strong> {selectedThumb.description}</p>
					<p><strong>Cost</strong> ${selectedThumb.cost}</p>
					<p><strong>ID #</strong> {selectedThumb.id}</p>
					<p><strong>Thumbnail File</strong> {selectedThumb.thumbnail}</p>
					<p><strong>Large Image File</strong> {selectedThumb.image}</p>
				</div>
			</div>
		</div>
    )
}

export default ThumbnailPreview;