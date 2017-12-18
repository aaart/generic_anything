
$path = (pwd).Path
try {
    cd .\geany.dotnet_core\geany.dotnet_core
    dotnet run
} finally {
    cd $path
}