type internshipQuery = {
    author: string,
    offer: string,
    source: string,
    createdAt: Date,
    status: Boolean,
    pass: string
}

type queryType = {
    page: number,
    page_size: number,
}

export {
    internshipQuery,
    queryType
}