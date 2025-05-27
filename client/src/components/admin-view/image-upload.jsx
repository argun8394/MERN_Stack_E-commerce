import { useRef } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { UploadCloudIcon } from "lucide-react";

function ProductImageUpload({
    imageFile,
    setImageFile,
    imageLoadingState,
    uploadedImageUrl,
    setUploadedImageUrl,
    setImageLoadingState,
}) {

    const inputRef = useRef(null);


    function handleImageFileChange(event) {
        console.log(event.target.files, "event.target.files");

        const selectedFile = event.target.files?.[0];
        console.log(selectedFile);

        if (selectedFile) setImageFile(selectedFile);
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDrop(event) {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files?.[0];
        if (droppedFile) setImageFile(droppedFile);
    }

    function handleRemoveImage() {
        setImageFile(null);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }



    return (
        <div className="w-full max-w-md mx-auto">
            <Label className="text-lg font-semibold mb-2 block"> Upload Image</Label>
            <div className="border-2 border-dashed rounded-lg p-4"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <Input id="image-upload" type="file"
                    className="hidden"
                    ref={inputRef}
                    onChange={handleImageFileChange}
                />

                {!imageFile ? (
                    <Label
                        htmlFor="image-upload"
                        flex flex-col items-center justify-center h-32 cursor-pointer
                    >
                        <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
                        <span>Drag & drop or click to upload image</span>
                    </Label>
                ) :
                    <div className="flex items-center justify-between">
                    </div>
                }
            </div>
        </div>
    );
}

export default ProductImageUpload;
