import CategoryItem from "./CategoryItem";

export default function CategoryList(props: any) {
    const { data } = props;
    
    return (
        <>
            <div className="grid grid-cols-4 gap-[20px]">
                {data.map((item: any, index: number) => (
                    <CategoryItem
                        key={index}
                        title={item.title}
                        quantity={item.quantity}
                        image1={item.image1}
                        image2={item.image2}
                        image3={item.image3}
                        image4={item.image4}
                        image5={item.image5}
                    />
                ))}
            </div>
        </>
    )
}