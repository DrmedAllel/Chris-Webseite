document.addEventListener('DOMContentLoaded', function() {
    // Get the nav element
    const navElement = document.querySelector('nav');
    
    // Check if nav element exists
    if (navElement) {
        // Set the HTML content
        navElement.innerHTML = `
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="../index.html">CG <span class="navbar-brand2">Director of Photography</span></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a href="../index.html">Home</a>
                    </li>
                    <li>
                        <a href="../commercial">Commercial</a>
                    </li>
                    <li>
                        <a href="../about">About</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
        `;
    } else {
        console.error('Navigation element not found in the DOM');
    }
});