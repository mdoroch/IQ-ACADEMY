import React from 'react';
import PropTypes from 'prop-types';
import AvatarEditor from 'react-avatar-editor';
import classes from './cropcrop.module.css'

const ImageCrop = ({ imageSrc, onCrop, setEditorRef, scaleValue, onScaleChange }) => (
    <div>
        <div className="editorOverlayInner">
            <div className="editorModalContent clearfix">
                <div className="cropCnt">
                    <AvatarEditor image={imageSrc} border={50} borderRadius={100} scale={scaleValue} rotate={0} ref={setEditorRef} className="cropCanvas" />
                    <input  className={classes.Range} style={{ width: '20%' }} type="range" value={scaleValue} name="points"
                           min="1" max="2"
                           step={0.01}
                           scale={1.2}
                           onChange={onScaleChange} />
                    <button onClick={onCrop} className={classes.Button1}>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    </div>
);

ImageCrop.propTypes = {
    open: PropTypes.bool.isRequired,
    setEditorRef: PropTypes.func.isRequired,
    onCrop: PropTypes.func.isRequired,
    scaleValue: PropTypes.number.isRequired,
    onScaleChange: PropTypes.func.isRequired,
};

export default ImageCrop;