import Swal from 'sweetalert2'
import axios from 'axios'

export const successAlert = (msg = 'Your data has been success') => {
    Swal.fire(
        'success!',
        msg,
        'success'
    )
}
export const failedAlert = (msg = 'Something went wrong!') => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: msg,
    })
}


export const deleteAlert = () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
            )
        }
    })
}

export const searchAlert = () => {
    Swal.fire({
        title: 'Submit your Github username',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
            return fetch(`//api.github.com/users/${login}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }
                    return response.json()
                })
                .catch(error => {
                    Swal.showValidationMessage(
                        `Request failed: ${error}`
                    )
                })
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: `${result.value.login}'s avatar`,
                imageUrl: result.value.avatar_url
            })
        }
    })
}

export const saveAlert = () => {
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })

}


export const showTODO = (todoData) => {
    console.log(todoData);
    Swal.fire({
        title: todoData.title,
        width: '80%',
        html:
            `<div class="container row justify-content-center text-center">
            <div class="col-lg-12 col-6 card">
                <div class="card-header border-0 text-center font-weight-bold ${todoData.priority === 'high' ? 'bg-danger text-white' : todoData.priority === 'medium' ? 'bg-warning text-dark' : 'bg-primary text-white'}">${todoData.priority}</div>
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                        <p class=" text-center font-weight-bold">
                            ${todoData.description}
                        </p >
                    </div >
                    <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                        <p class="d-flex flex-column text-center font-weight-bold ms-5">
                            Starts at
                            <span class="text-muted">${todoData.start_date}</span>
                        </p>
                        <p class="d-flex flex-column text-center font-weight-bold me-5">
                            End at
                            <span class="text-muted">${todoData.end_date}</span>
                        </p>
                    </div>
                    <div class="d-flex justify-content-center align-items-center mb-0">${todoData.status}</div>
                </div >
            </div >
        </div >
    `
    })
}