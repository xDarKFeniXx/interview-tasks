function nextXuplets(X, Xmax, A, size, N) {
  for (var j = size - 1; j >= 0; j--) {
    if (X[j] != Xmax[j]) {
      X[j]++;

      for (var k = j + 1; k <= size - 1; k++) {
        X[k] = 0;

        Xmax[k] = N;

        for (var l = 0; l < j + 1; l++) {
          Xmax[k] -= A[l] * X[l];
        }

        Xmax[k] = Math.floor(Xmax[k] / A[k]);
      }

      return false;
    }
  }

  return true;
}

function isMatch(A, X, N) {
  var sum = 0;

  for (var i = 0; i < A.length - 1; i++) {
    sum += A[i] * X[i];
  }

  if ((N - sum) % A[A.length - 1] == 0) {
    X[A.length - 1] = (N - sum) / A[A.length - 1];
    return true;
  } else {
    return false;
  }
}

function clique() {
  // Get the data
  //--------------

  var s = document.formu.cadran1.value;

  var A = new Array();

  var reg = new RegExp("[ ,]+", "g");

  A = s.split(reg);

  if (document.formu.radio1[1].checked) {
    var N = document.formu.cadran2.value;
  }

  // Check for correct inputs
  //-------------------------

  var reg = new RegExp("^[1-9][0-9]*$");

  for (var i = 0; i < A.length; i++) {
    if (reg.test(A[i]) == false) {
      alert("Enter positive integers separated by a comma or a space");
      document.formu.cadran1.value = "";
      return null;
    }
    A[i] = parseInt(A[i], 10);
  }

  if (document.formu.radio1[1].checked) {
    if (reg.test(N) == false) {
      alert("Enter positive N");
      document.formu.cadran2.value = "";
      return null;
    }

    N = parseInt(N, 10);
  }

  if (document.formu.radio1[0].checked) {
    var gcd = A[0];

    for (var i = 1; i < A.length; i++) {
      gcd = GCD(gcd, A[i]);
    }

    if (gcd != 1) {
      alert("GCD is not 1 !");
      document.formu.cadran1.value = "";
      return null;
    }
  }

  // Search start
  //-----------------------------------

  var X = new Array();
  var Xmax = new Array();
  var sol = new Array();
  var list = new Array();

  var sum;

  var ii = 0;
  var jj = 0;
  var i, j, k, l;

  var consecutiveMatch = 0;
  var found = false;
  var finish = false;

  if (document.formu.radio1[1].checked) {
    for (i = 0; i < A.length - 1; i++) {
      X[i] = 0;
      Xmax[i] = Math.floor(N / A[i]);
    }

    while (finish == false) {
      if (isMatch(A, X, N) == true) {
        sol[ii] = new Array();

        for (jj = 0; jj < A.length; jj++) {
          sol[ii][jj] = X[jj];
        }

        ii++;
      }

      finish = nextXuplets(X, Xmax, A, A.length - 1, N);
    }

    s = "Number of solutions: " + sol.length + "\n";
    s = s + "Solutions are:\n\n"; // Print result

    if (sol.length == 0) {
      s = s + "none";
    } else {
      for (ii = 0; ii < sol.length; ii++) {
        s = s + sol[ii] + "\n";
      }
    }

    document.formu.zonetexte.value = s;
  } else {
    // document.formu.radio1[0].checked

    A.sort(function (x, y) {
      return y - x;
    }); // sort A[] in descending order

    N = 1;

    while (consecutiveMatch != A[A.length - 1]) {
      found = false;
      finish = false;

      for (i = 0; i < A.length - 1; i++) {
        X[i] = 0;
        Xmax[i] = Math.floor(N / A[i]);
      }

      while (finish == false) {
        if (isMatch(A, X, N) == true) {
          found = true;
          break;
        }

        finish = nextXuplets(X, Xmax, A, A.length - 1, N);
      }

      if (found == true) {
        consecutiveMatch++;
      } else {
        list[ii++] = N;
        consecutiveMatch = 0;
      }

      N++;
    } // end of "while (consecutiveMatch .. "

    s = "g(" + A + ")= " + list[list.length - 1] + "\n";
    s = s + "NRI(" + A + ")= " + list.length + "\n\n";
    s = s + "non-representable integers are: \n\n";
    s = s + list;
    document.formu.zonetexte.value = s;
  } // end of "if (radio1[1].checked) ... else ...
} // end of "function clique"
