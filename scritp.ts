// Helper function to save content when edited
function saveEditableContent(id: string): void {
    const element = document.getElementById(id) as HTMLElement;
    element.addEventListener('input', () => {
        localStorage.setItem(id, element.innerText); // Store changes in local storage
    });
}

// Apply editable functionality to each section
document.addEventListener('DOMContentLoaded', () => {
    const fields = ['nameDisplay', 'jobTitleDisplay', 'educationDisplay', 'workExperienceDisplay'];
    
    fields.forEach(id => {
        const savedContent = localStorage.getItem(id);
        if (savedContent) {
            document.getElementById(id)!.innerText = savedContent; // Load saved data 
        }
        saveEditableContent(id); // Enable saving changes
    });
});
