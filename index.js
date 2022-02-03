const core = require('@actions/core');
const exec = require('@actions/exec');

async function main() {
  try {
    const downloadUrl = 'https://github.com/biome-sh/biome/releases/download/bio-1.5.75/bio-1.5.75-x86_64-linux';
    console.log('Downloading Biome from:');
    console.log(downloadUrl);
    await exec.exec(`curl -o /tmp/bio ${downloadUrl}`);
    await exec.exec(`chmod a+x /tmp/bio`);
    await exec.exec(`sudo /tmp/bio pkg install biome/bio --binlink --force`);
    await exec.exec('rm -f /tmp/bio');
  } catch (error){
    core.setFailed(error.message);
  }
}
main();