"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux"
import { productData } from "@/services/json/productData"
import { cartAdd, searchFunc } from "@/store/slices/global.slice"
import { ProductType } from "@/typescript/interface/Interface"
import { useForm } from "react-hook-form"

function Products() {

  const dispatch = useAppDispatch();
  const {searchData} = useAppSelector((state) => state.global);



  const {register,handleSubmit,formState:{errors}} = useForm({
    defaultValues: {
      search: ""
    }
  });

  const onSubmit = (data:string) => {
    dispatch(searchFunc(data as unknown as string));
  };


  const query = searchData;
  const searchedItems = productData.filter((item) => item.name === query);


 
  return (
    <div className="w-full">

      <div className="w-[97.9%] p-4 bg-gray-300 my-5 rounded-md">
        <form className="w-full flex justify-between">
          <input type="text" className="w-[92%] bg-white rounded-sm text-2xl" {...register("search")}/>
          <button type="submit" className="p-2 px-5 bg-blue-600 rounded-sm">Search</button>
        </form>
      </div>
      <div className="w-full flex flex-wrap gap-y-10">
        {!query && 
        <>
        {productData?.map((item) => (
          <Card key={item.name} className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={item.image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{item.price} INR</Badge>
        </CardAction>
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum mollitia, architecto repellendus vero voluptas consectetur.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button type="button" onClick={() => dispatch(cartAdd(item))} className="w-full">Add to cart</Button>
      </CardFooter>
    </Card>
        ))}
        </>
        }
        {query && <>
        {searchedItems?.map((item) => (
          <Card key={item.name} className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={item.image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{item.price} INR</Badge>
        </CardAction>
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum mollitia, architecto repellendus vero voluptas consectetur.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button type="button" onClick={() => dispatch(cartAdd(item))} className="w-full">Add to cart</Button>
      </CardFooter>
    </Card>
        ))}
        </>}
      </div>

    </div>
  )
}

export default Products