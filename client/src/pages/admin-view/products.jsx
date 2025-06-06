import ProductImageUpload from "@/components/admin-view/image-upload";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import { Fragment, useState } from "react";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
  averageReview: 0,
};

function AdminProducts() {

  const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);


    function onSubmit(event) {}


  return (
    <Fragment>
      <div className="mb-5 flex w-full justify-end ">
         <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
      <Sheet 
         open={openCreateProductsDialog}
         onOpenChange={() => {
           setOpenCreateProductsDialog(false);
         }}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>
          <ProductImageUpload
             imageFile={imageFile}
             setImageFile={setImageFile}
             uploadedImageUrl={uploadedImageUrl}
             setUploadedImageUrl={setUploadedImageUrl}
             setImageLoadingState={setImageLoadingState}
             imageLoadingState={imageLoadingState}
          />
          <div className="py-6">
            <CommonForm
               onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData} 
              buttonText= "Add"
              formControls={addProductFormElements}
            />
          </div>  
        </SheetContent>
      </Sheet>
    </Fragment>
  )
}

export default AdminProducts