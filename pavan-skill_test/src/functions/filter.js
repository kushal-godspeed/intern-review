module.exports = function(response) {
    const filteredDocuments = response.response.docs.filter(
      doc => doc.section_name === "Business Day"
    );
    return filteredDocuments;
}

