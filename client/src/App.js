import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import HomePage from "./pages/HomePage/HomePage";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Policy = lazy(() => import("./pages/Policy"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));
const Register = lazy(() => import("./pages/Auth/Register"));
const Login = lazy(() => import("./pages/Auth/Login"));
const UserDashboard = lazy(() => import("./pages/user/UserDashboard"));
const PrivateRoute = lazy(() => import("./components/Routes/Private"));
const ForgotPassword = lazy(() => import("./pages/Auth/ForgotPassword"));
const AdminRoute = lazy(() => import("./components/Routes/AdminRoute"));
const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard"));
const CreateCategory = lazy(() => import("./pages/Admin/CreateCategory"));
const CreateProduct = lazy(() => import("./pages/Admin/CreateProduct"));
const UpdateProduct = lazy(() => import("./pages/Admin/UpdateProduct"));
const Users = lazy(() => import("./pages/Admin/Users"));
const Profile = lazy(() => import("./pages/user/Profile"));
const Orders = lazy(() => import("./pages/user/Orders"));
const Products = lazy(() => import("./pages/Admin/Products"));
const Search = lazy(() => import("./pages/Search"));
const ProductDetails = lazy(() =>
  import("./pages/ProductDetails/ProductDetails")
);
const Categories = lazy(() => import("./pages/Categories"));
const CategoryProduct = lazy(() =>
  import("./pages/CategoryProduct/CategoryProduct")
);
const CartPage = lazy(() => import("./pages/CartPage/CartPage"));
const AdminOrders = lazy(() => import("./pages/Admin/AdminOrders"));

function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/category/:slug" element={<CategoryProduct />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<UserDashboard />} />
            <Route path="user/profile" element={<Profile />} />
            <Route path="user/orders" element={<Orders />} />
          </Route>
          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/create-category" element={<CreateCategory />} />
            <Route path="admin/create-product" element={<CreateProduct />} />
            <Route path="admin/product/:slug" element={<UpdateProduct />} />
            <Route path="admin/products" element={<Products />} />
            <Route path="admin/users" element={<Users />} />
            <Route path="admin/orders" element={<AdminOrders />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
