import * as AdmZip from 'adm-zip';
import * as fs from 'fs';

const sourcePath: string = "C:\\Temp\\Temp.zip";

if (!fs.existsSync(sourcePath))
{
	// console.error(`The file '${sourcePath}' does not exist.`)
	throw `The specified file '${sourcePath}' does not exist.`
}

let sourcePathIsZipFile: boolean = false;
const sourcePathZipDirectoryPath: string = sourcePath + "-Extracted";
if (sourcePath.endsWith(".zip"))
{
	sourcePathIsZipFile = true;

	console.log(`'${sourcePath}' is a zip file, and it will be extracted to '${sourcePathZipDirectoryPath}'.`);
	const zip = new AdmZip(sourcePath);
	zip.extractAllTo(sourcePathZipDirectoryPath)
}
else
{
	console.log("is NOT a zip file");
}

if (sourcePathIsZipFile)
{
	console.log(`Zipping up directory '${sourcePathZipDirectoryPath}' to file '${sourcePath}'.`)
	const zip = new AdmZip();
	zip.addLocalFolder(sourcePathZipDirectoryPath);
	zip.writeZip(sourcePath);
}
