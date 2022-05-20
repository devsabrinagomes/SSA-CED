import React from 'react';
import Chart from './Chart';

function App() {
  return (  
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-uppercase font-weight-bold">Professores aprovados</p>
                      <h5 class="font-weight-bolder">
                      1892
                      </h5>
                    <p class="mb-0">
                      <span class="text-success text-sm font-weight-bolder">+55% </span>
                      desde ontem
                    </p>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div class="icon icon-shape bg-gradient-info shadow-primary text-center rounded-circle">
                  <i class="ni ni-paper-diploma"></i>
                  </div>
                </div>       
              </div>   
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-uppercase font-weight-bold">Alunos aprovados</p>
                      <h5 class="font-weight-bolder">
                      593
                      </h5>
                    <p class="mb-0">
                      <span class="text-success text-sm font-weight-bolder">+29% </span>
                      desde ontem
                    </p>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div class="icon icon-shape bg-gradient-warning shadow-primary text-center rounded-circle">
                  <i class="ni ni-collection"></i>
                  </div>
                </div>       
              </div>   
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-uppercase font-weight-bold">Total aprovados</p>
                      <h5 class="font-weight-bolder">
                      2485
                      </h5>
                    <p class="mb-0">
                      <span class="text-success text-sm font-weight-bolder">+36% </span>
                      desde ontem
                    </p>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div class="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                  <i class="ni ni-hat-3"></i>
                  </div>
                </div>       
              </div>   
            </div>
          </div>
        </div>        
        <Chart/>
      </div>
    
    </div>
    
    
  );
}

export default App;

