import '../stylesheets/App.css';
import Something from './SlateEditor/Editor'
function App() {
  return (
    <>
      <nav class="navbar navbar-light bg-light" >
        <div class="container">
          {/* <a class="navbar-brand" href="/">
            <img src="" alt="" width="42" height="42" />
          </a> */}
          <div class="data">Data</div>
        </div>
      </nav>
      <div class="topdiv">
        John Doe Interview
      </div>
      <div className="body">
        <div>
          <Something />
        </div>
      </div>
      <section>
        <div class="container" style={{ marginBottom: "100px" }}>
          <div className="box1">
            Box1
          </div>
          <div class="row">
            <div>
              <div class="comment mt-4 text-justify float-left"> <img src="" alt="" class="rounded-circle" width="40" height="40" />
                <div class="row">
                  <div class="col-2">
                    <div className="h4"><h4 >Speaker 1</h4></div>
                  </div>
                  <div class="col">
                    <div className="span"><span>09:45</span></div>
                  </div>
                </div>

                <div className="p"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p></div>
              </div>
              <div class="text-justify darker mt-4 float-right"> <img src="" alt="" class="rounded-circle" width="40" height="40" />
                <div class="row">
                  <div class="col-2">
                    <div className="h4"><h4 >Speaker 2</h4></div>
                  </div>
                  <div class="col">
                    <div className="span"><span>06:35</span></div>
                  </div>
                </div>
                <div className="p"> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p></div>
              </div>
              <div class="comment mt-4 text-justify"> <img src="" alt="" class="rounded-circle" width="40" height="40" />
                <div class="row">
                  <div class="col-2">
                    <div className="h4"><h4 >Speaker 2</h4></div>
                  </div>
                  <div class="col">
                    <div className="span"><span>04:30</span></div>
                  </div>
                </div>
                <div className="p"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}

export default App;

