   var quill = new Quill('#editor-container', {
                theme: 'snow',
                placeholder: 'Write Here...',
                
              });

              function getEditorContent() {
                var content = quill.root.innerHTML;
                document.getElementById('editor-content').innerHTML = content;
}
              
window.quills = quills;
window.getEditorContent = getEditorContent;

