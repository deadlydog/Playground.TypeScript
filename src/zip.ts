import * as AdmZip from 'adm-zip';

var sourcePath = "C:\\Temp\\Test.zip";

var sourcePathIsZipFile = false;
var sourcePathZipDirectoryPath = sourcePath + "-Extracted";
if (sourcePath.endsWith(".zip")) {
	sourcePathIsZipFile = true;

	console.log("is a zip file");
	var zip = new AdmZip(sourcePath);
	zip.extractAllTo(sourcePathZipDirectoryPath)
}
else {
	console.log("is NOT a zip file");
}
