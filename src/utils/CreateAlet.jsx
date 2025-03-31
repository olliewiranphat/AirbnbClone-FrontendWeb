import Swal from "sweetalert2";

export const CreateAlet = ( icon,text) => {
    return Swal.fire({
        icon: "success" ,
        text: "created successfully",
        draggable: true,
        timer: 5000,
    });
}

export const DeleteAlet = () => {
    return Swal.fire({
        icon: "warning",
        text: "Are you sure you want to delete this item?",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: "No",
    });
}

