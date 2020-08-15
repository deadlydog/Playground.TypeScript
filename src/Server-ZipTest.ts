import * as AdmZip from 'adm-zip';
import * as fs from 'fs';

var sourcePath = "C:\\Temp\\Temp.zip";

if (!fs.existsSync(sourcePath))
{
	// console.error(`The file '${sourcePath}' does not exist.`)
	throw `The specified file '${sourcePath}' does not exist.`
}

var sourcePathIsZipFile = false;
var sourcePathZipDirectoryPath = sourcePath + "-Extracted";
if (sourcePath.endsWith(".zip"))
{
	sourcePathIsZipFile = true;

	console.log(`'${sourcePath}' is a zip file, and it will be extracted to '${sourcePathZipDirectoryPath}'.`);
	var zip = new AdmZip(sourcePath);
	zip.extractAllTo(sourcePathZipDirectoryPath)
}
else
{
	console.log("is NOT a zip file");
}

if (sourcePathIsZipFile)
{
	console.log(`Zipping up directory '${sourcePathZipDirectoryPath}' to file '${sourcePath}'.`)
	var zip = new AdmZip();
	zip.addLocalFolder(sourcePathZipDirectoryPath);
	zip.writeZip(sourcePath);
}
