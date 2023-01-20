type internshipNoID = {
    author: string,
    offer: string,
    source: string,
    createdAt: Date
    status: boolean
}

type page = {
    page: number,
    page_size: number,
}

export {
    internshipNoID,
    page
}