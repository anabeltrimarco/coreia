import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// PÁGINAS
import Home from "./pages/Home";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Proyectos from "./pages/Proyectos";
import FiguMatch from "./pages/FiguMatch";
import PawTrace from "./pages/PawTrace";
import Coreia from "./pages/Coreia";
import Contacto from "./pages/Contacto";

// COMPONENTES
import CoreiaBar from "./components/CoreiaBar";

function AppContent() {
  const location = useLocation();

  /*
    CoreiaBar aparece en todas las páginas
    excepto en Inicio.
  */
  const mostrarCoreiaBar =
    location.pathname !== "/" &&
    location.pathname !== "/inicio" &&
    location.pathname !== "/contacto";

  return (
    <>
      <Routes>

        {/* PORTADA */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* INICIO */}
        <Route
          path="/inicio"
          element={<Inicio />}
        />

        {/* SERVICIOS */}
        <Route
          path="/servicios"
          element={<Servicios />}
        />

        {/* PROYECTOS */}
        <Route
          path="/proyectos"
          element={<Proyectos />}
        />

        {/* FIGUMATCH */}
        <Route
          path="/proyectos/figumatch"
          element={<FiguMatch />}
        />

        {/* PAWTRACE */}
        <Route
          path="/proyectos/pawtrace"
          element={<PawTrace />}
        />

        {/* COREIA */}
        <Route
          path="/coreia"
          element={<Coreia />}
        />

        {/* CONTACTO */}
        <Route
          path="/contacto"
          element={<Contacto />}
        />

        {/* RUTA NO ENCONTRADA */}
        <Route
          path="*"
          element={<Home />}
        />

      </Routes>

      {/* FOOTER GLOBAL COREIA */}
      {mostrarCoreiaBar && <CoreiaBar />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}