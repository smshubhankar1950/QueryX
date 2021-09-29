import React from 'react';
import "./MidSection.css"

function MidSection(props) {
    return (
        <div>
            <div className="midSection">
            <div className="container">
                <div className="row heading"> Why Choose Us?</div>
                <div className="row">
                    <div className="col-sm">
                        <div className="single-feature">
                            <div><img src="https://img.icons8.com/ultraviolet/40/000000/money-bag-euro.png" alt="money"/></div>
                            <div>Cost effective</div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla facere, maiores, aliquam nesciunt explicabo inventore sit.</div>
                        </div>
                    </div>
                    <div className="col-sm">
                    <div className="single-feature">
                    <div>
                        <img src="https://img.icons8.com/ultraviolet/40/000000/registry-editor.png" alt="coverage"/></div>
                        <div>Intrinsic coverage</div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla facere, maiores, aliquam nesciunt explicabo inventore sit.</div>
                        </div>
                    </div>
                    <div className="col-sm">
                    <div className="single-feature">
                    <div><img src="https://img.icons8.com/ultraviolet/40/000000/headset.png" alt="support"/></div>
                            <div>24X7 Support</div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla facere, maiores, aliquam nesciunt explicabo inventore sit.</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default MidSection;