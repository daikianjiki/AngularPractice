import { Component } from '@angular/core';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent {

  /**
   * The File object represents a file selected by the user through an 
   * <input type="file"> element. It contains information about the file
   * such as its name, size, and type. In this case, 'selectedFile'
   * variable is declared as File object.
   */
  selectedFile!: File
  url: any

  onFileSelected(event : any) {
    this.selectedFile = <File> event.target.files[0]
  /**
   * The FileReader is a built-in JavaScript API that provides methods to
   * read the contents of a file asynchronously. It allows you to read
   * files from the user's local system and perform operations on the data.
   */
    const reader = new FileReader();
  /**
   * The code below instructs the FileReader to read the contents of the 
   * 'selectedFile' asynchronously and generate a data URL. The data URL
   * represents the file's contents as a base64-encoded string.
   */
    reader.readAsDataURL(this.selectedFile);
  /**
   * This sets up an event handler to handle the result of the file
   * reading operation. Line 3\ assigns a callback function to the 'onload'
   * event of the FileReader. This function will be exectued when the file
   * reading operation is completed successfully/
   * 
   * The parameter '_event' in the callback function is a convention used 
   * to indicate that the parameter is unused or not important. It's a way
   * to ignore the event parameter when you don't need it.In this case,
   * the event parameter is not used, so '_event' is used as a placeholder.
   */
    reader.onload = (_event) => {
    /**
     * 'reader.result' represents the result of the file reading operation,
     * which is the generated data URL. It assigns this value to the 'url'
     * property which is used to display the the image in the view template
     * via property binding.
     */
      this.url = reader.result
    }
  }
}
