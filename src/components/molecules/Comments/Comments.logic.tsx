export const readMoreSplit = (comment: string) => {
    let opinionSplit = [];
    opinionSplit.push(comment.substr(0, 300));
    comment.substr(300, 2000) !== '' && opinionSplit.push(comment.substr(300, 2000));
    return opinionSplit;
};

export const checkBreakLine = (comment: string) => {
    return comment.split('也').map((sentence: string) => (
        <>
            {sentence} <br />
        </>
    ));
};
