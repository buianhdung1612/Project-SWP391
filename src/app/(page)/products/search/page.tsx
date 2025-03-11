import Banner2 from "@/app/components/Banner/Banner2";
import Section2 from "./Section2";

// Sử dụng getServerSideProps để lấy dữ liệu server-side
export async function getServerSideProps(context: any) {
    const { query } = context;  // context.query chứa các search params từ URL
    const { keyword, category, page } = query;

    const linkApi = `https://freshskinweb.onrender.com/home/search?keyword=${keyword || ''}`;

    // Xử lý các category và page
    const api = new URL(linkApi);
    if (category) {
        Array.isArray(category) ? category.forEach((cat) => api.searchParams.append('category', cat)) : api.searchParams.append('category', category);
    }
    if (page) {
        api.searchParams.set('page', page);
    }

    const response = await fetch(api.href);
    const data = await response.json();

    return {
        props: {
            data: data.data,  // Truyền dữ liệu trả về từ API
        },
    };
}

export default function ProductsSearchPage({ data }: any) {
    return (
        <>
            <Banner2 />
            <Section2 data={data} />
        </>
    );
}

