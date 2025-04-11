<script>

  import { Router, Link, Route } from "svelte-routing";
  import Home from "./pages/Home/Home.svelte";
  import Pharmacy from "./pages/Pharmacy/Pharmacy.svelte";
  import About from "./pages/About/About.svelte";

  export let url;
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/pharmacy">Pharmacy</Link>
  </nav>

  <div>
    <Route path="/">
      <Home/>
    </Route>
    <Route path="/about"><About /></Route> 
    <Route path="/pharmacy"><Pharmacy></Pharmacy></Route>

  </div>


</Router>