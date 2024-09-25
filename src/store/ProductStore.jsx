import { create } from 'zustand'
import { useParams } from 'react-router-dom';
const useProductStore = create((set,get) => ({
    product:{},
    productList: [],
    categories: [],
  categoryName: '',
  changeCategory: (cat) => set((state) => ({
    categoryName: cat,
  })),
    fetchAllCategories: async() => {
         try {
        const res = await fetch('https://fakestoreapi.com/products/categories');
        const json = await res.json();
        set({categories:json})
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    fetchAllProducts: async () => {
        const { categoryName } = get(); // Access state with get()
        try {
        const res = await fetch('https://fakestoreapi.com/products');
            const json = await res.json();
            categoryName.length==0?
            set({ productList: json }) : set({ productList: json.filter(p => p.category === categoryName) })
          const { productList } = get();
          console.log(productList)
      } catch (error) {
        console.error("Error fetching products:", error);
        }
        set({categoryName:''})
    },
    fetchAsingleProduct: async (id) => {
        try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            const json = await res.json();
            set({product:json})
      } catch (error) {
        console.error("Error fetching product:", error);
        }
    },
   
}))
export default useProductStore;