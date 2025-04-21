// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// import RootLayout from "./layouts/RootLayout";
// import Carts from "./pages/Carts";
// import Post from "./pages/Post";
// import Product from "./pages/Product";
// import Recipes from "./pages/Recipes";
// import ProductDetail from "./pages/ProductDetail";
// import Home from "./pages/Home";
// import AddProduct from "./pages/AddProduct";
// import EditProduct from "./pages/EditProduct";

// const queryClient = new QueryClient()

// function App() {
// 	const router = createBrowserRouter(createRoutesFromElements(
// 		<Route path="/" element={<RootLayout />}>
// 			<Route index element={<Home/>} />
// 			<Route path="product" element={<Product />} />
// 			<Route path="product/add" element={<AddProduct />} />
// 			<Route path="product/:id" element={<ProductDetail/>}/>
// 			<Route path="product/:id/edit" element={<EditProduct/>}/>
// 			<Route path="recipes" element={<Recipes />} />
// 			<Route path="posts" element={<Post />} />
// 			<Route path="carts" element={<Carts />} />
// 		</Route>
// 	));
// 	return (
// 		<>
// 			<QueryClientProvider client={queryClient}>
// 				<RouterProvider router={router} />
// 			</QueryClientProvider>
// 		</>
// 	)
// }

// export default App
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Register from "./pages/Register";
import BaseLayout from "./layouts/BaseLayout";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import { AuthProvider } from "./utils/AuthProvider";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="posts"
            element={
              <PrivateRoute>
                <Post />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/" element={<BaseLayout />}>
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
}

export default App;