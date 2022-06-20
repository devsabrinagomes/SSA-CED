import React from "react";

function Card() {
    return(
        <div className="container-fluid py-4">
        <div className="row">
          <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-uppercase font-weight-bold">Professores aprovados</p>
                        <h5 className="font-weight-bolder">
                        1892
                        </h5>
                      <p className="mb-0">
                        <span className="text-success text-sm font-weight-bolder">+55% </span>
                        desde ontem
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div>
        </div>
      </div>
    );
}

export default Card;