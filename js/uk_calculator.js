$(document).ready(function(){
	$("#calc").click(function(){
		$bust = $("#bust").val();
		$underbust = $("#underbust").val();

		$cup = "Oh";
		$band = "Oh"

		if (($underbust >= 58) && ($underbust < 63)) {
			$band = "26"

			if ($bust <= 59) {
				$cup = "Ô’";
				$band = "ò";
			}
			else if ($bust <= 62) {
				$cup = "AAA";
			}
			else if ($bust <= 65) {
				$cup = "AA";
			}
			else if ($bust <= 67) {
				$cup = "A";
			}
			else if ($bust <= 70) {
				$cup = "B";
			}
			else if($bust <= 72) {
				$cup = "C";            
			}
			else if($bust <= 75) {
				$cup = "D";
			}
			else if($bust <= 77) {
				$cup = "DD";
			}
			else if($bust <= 80) {
				$cup = "E";
			}
			else if($bust <= 82) {
				$cup = "F";
			}
			else if($bust <= 85) {
				$cup = "FF";
			}
			else if($bust <= 87) {
				$cup = "G";
			}
			else if($bust <= 90) {
				$cup = "GG";
			}
			else if($bust <= 92) {
				$cup = "H";
			}
			else if($bust <= 95) {
				$cup = "HH";
			}
			else if($bust <= 97) {
				$cup = "J";
			}
			else if($bust <= 100) {
				$cup = "JJ";
			}
			else if($bust <= 102) {
				$cup = "K";
			}
			else if($bust <= 105) {
				$cup = "KK";
			}
			else if($bust <= 107) {
				$cup = "L";
			}
			else if($bust <= 110) {
				$cup = "LL";
			}
			else if($bust <= 112) {
				$cup = "M";
			}
			else if($bust <= 115) {
				$cup = "MM";
			}
			else if($bust <= 117) {
				$cup = "N";
			}
			else {
				$cup = "Ô’";
				$band = "ò";
			}
		}

		if (($underbust >= 63) && ($underbust < 68)) {
			$band = "28"

			if ($bust <= 65) {
				$cup = "Ô’";
				$band = "ò";
			}
			else if ($bust <= 67) {
				$cup = "AAA";
			}
			else if ($bust <= 70) {
				$cup = "AA";
			}
			else if($bust <= 72) {
				$cup = "A";            
			}
			else if($bust <= 75) {
				$cup = "B";
			}
			else if($bust <= 77) {
				$cup = "C";
			}
			else if($bust <= 80) {
				$cup = "D";
			}
			else if($bust <= 82) {
				$cup = "DD";
			}
			else if($bust <= 85) {
				$cup = "E";
			}
			else if($bust <= 87) {
				$cup = "F";
			}
			else if($bust <= 90) {
				$cup = "FF";
			}
			else if($bust <= 92) {
				$cup = "G";
			}
			else if($bust <= 95) {
				$cup = "GG";
			}
			else if($bust <= 97) {
				$cup = "H";
			}
			else if($bust <= 100) {
				$cup = "HH";
			}
			else if($bust <= 102) {
				$cup = "J";
			}
			else if($bust <= 105) {
				$cup = "JJ";
			}
			else if($bust <= 107) {
				$cup = "K";
			}
			else if($bust <= 110) {
				$cup = "KK";
			}
			else if($bust <= 112) {
				$cup = "L";
			}
			else if($bust <= 115) {
				$cup = "LL";
			}
			else if($bust <= 117) {
				$cup = "M";
			}
			else if($bust <= 120) {
				$cup = "MM";
			}
			else if($bust <= 122) {
				$cup = "N";
			}
			else {
				$cup = "Ô’";
				$band = "ò";
			}
		}

		if (($underbust >= 68) && ($underbust < 73)) {
			$band = "30"

			if ($bust <= 70) {
				$cup = "Ô’";
				$band = "ò";
			}
			else if ($bust <= 72) {
				$cup = "AAA";
			}
			else if ($bust <= 75) {
				$cup = "AA";
			}
			else if($bust <= 77) {
				$cup = "A";            
			}
			else if($bust <= 80) {
				$cup = "B";
			}
			else if($bust <= 82) {
				$cup = "C";
			}
			else if($bust <= 85) {
				$cup = "D";
			}
			else if($bust <= 87) {
				$cup = "DD";
			}
			else if($bust <= 90) {
				$cup = "E";
			}
			else if($bust <= 92) {
				$cup = "F";
			}
			else if($bust <= 95) {
				$cup = "FF";
			}
			else if($bust <= 97) {
				$cup = "G";
			}
			else if($bust <= 100) {
				$cup = "GG";
			}
			else if($bust <= 102) {
				$cup = "H";
			}
			else if($bust <= 105) {
				$cup = "HH";
			}
			else if($bust <= 107) {
				$cup = "J";
			}
			else if($bust <= 110) {
				$cup = "JJ";
			}
			else if($bust <= 112) {
				$cup = "K";
			}
			else if($bust <= 115) {
				$cup = "KK";
			}
			else if($bust <= 117) {
				$cup = "L";
			}
			else if($bust <= 120) {
				$cup = "LL";
			}
			else if($bust <= 122) {
				$cup = "M";
			}
			else if($bust <= 125) {
				$cup = "MM";
			}
			else if($bust <= 127) {
				$cup = "N";
			}
			else {
				$cup = "Ô’";
				$band = "ò";
			}
		}

		if (($underbust >= 73) && ($underbust < 78)) {
			$band = "32"

			if ($bust <= 75) {
				$cup = "Ô’";
				$band = "ò";
			}
			else if ($bust <= 77) {
				$cup = "AAA";
			}
			else if ($bust <= 80) {
				$cup = "AA";
			}
			else if($bust <= 82) {
				$cup = "A";            
			}
			else if($bust <= 85) {
				$cup = "B";
			}
			else if($bust <= 87) {
				$cup = "C";
			}
			else if($bust <= 90) {
				$cup = "D";
			}
			else if($bust <= 92) {
				$cup = "DD";
			}
			else if($bust <= 95) {
				$cup = "E";
			}
			else if($bust <= 97) {
				$cup = "F";
			}
			else if($bust <= 100) {
				$cup = "FF";
			}
			else if($bust <= 102) {
				$cup = "G";
			}
			else if($bust <= 105) {
				$cup = "GG";
			}
			else if($bust <= 107) {
				$cup = "H";
			}
			else if($bust <= 110) {
				$cup = "HH";
			}
			else if($bust <= 112) {
				$cup = "J";
			}
			else if($bust <= 115) {
				$cup = "JJ";
			}
			else if($bust <= 117) {
				$cup = "K";
			}
			else if($bust <= 120) {
				$cup = "KK";
			}
			else if($bust <= 122) {
				$cup = "L";
			}
			else if($bust <= 125) {
				$cup = "LL";
			}
			else if($bust <= 127) {
				$cup = "M";
			}
			else if($bust <= 130) {
				$cup = "MM";
			}
			else if($bust <= 132) {
				$cup = "N";
			}
			else {
				$cup = "Ô’";
				$band = "ò";
			}
		}

		if (($underbust >= 78) && ($underbust < 83)) {
			$band = "34"

			if ($bust <= 80) {
				$cup = "Ô’";
				$band = "ò";
			}
			else if ($bust <= 82) {
				$cup = "AAA";
			}
			else if($bust <= 85) {
				$cup = "AA";
			}
			else if($bust <= 87) {
				$cup = "A";            
			}
			else if($bust <= 90) {
				$cup = "B";
			}
			else if($bust <= 92) {
				$cup = "C";
			}
			else if($bust <= 95) {
				$cup = "D";
			}
			else if($bust <= 97) {
				$cup = "DD";
			}
			else if($bust <= 100) {
				$cup = "E";
			}
			else if($bust <= 102) {
				$cup = "F";
			}
			else if($bust <= 105) {
				$cup = "FF";
			}
			else if($bust <= 107) {
				$cup = "G";
			}
			else if($bust <= 110) {
				$cup = "GG";
			}
			else if($bust <= 112) {
				$cup = "H";
			}
			else if($bust <= 115) {
				$cup = "HH";
			}
			else if($bust <= 117) {
				$cup = "J";
			}
			else if($bust <= 120) {
				$cup = "JJ";
			}
			else if($bust <= 122) {
				$cup = "K";
			}
			else if($bust <= 125) {
				$cup = "KK";
			}
			else if($bust <= 127) {
				$cup = "L";
			}
			else if($bust <= 130) {
				$cup = "LL";
			}
			else if($bust <= 132) {
				$cup = "M";
			}
			else if($bust <= 135) {
				$cup = "MM";
			}
			else if($bust <= 137) {
				$cup = "N";
			}
			else {
				$cup = "Ô’";
				$band = "ò";
			}
		}

		if (($underbust >= 83) && ($underbust < 88)) {
			$band = "34"

			if ($bust <= 80) {
				$cup = "Ô’";
				$band = "ò";
			}
			else if ($bust <= 82) {
				$cup = "AAA";
			}
			else if($bust <= 85) {
				$cup = "AA";
			}
			else if($bust <= 87) {
				$cup = "A";            
			}
			else if($bust <= 90) {
				$cup = "B";
			}
			else if($bust <= 92) {
				$cup = "C";
			}
			else if($bust <= 95) {
				$cup = "D";
			}
			else if($bust <= 97) {
				$cup = "DD";
			}
			else if($bust <= 100) {
				$cup = "E";
			}
			else if($bust <= 102) {
				$cup = "F";
			}
			else if($bust <= 105) {
				$cup = "FF";
			}
			else if($bust <= 107) {
				$cup = "G";
			}
			else if($bust <= 110) {
				$cup = "GG";
			}
			else if($bust <= 112) {
				$cup = "H";
			}
			else if($bust <= 115) {
				$cup = "HH";
			}
			else if($bust <= 117) {
				$cup = "J";
			}
			else if($bust <= 120) {
				$cup = "JJ";
			}
			else if($bust <= 122) {
				$cup = "K";
			}
			else if($bust <= 125) {
				$cup = "KK";
			}
			else if($bust <= 127) {
				$cup = "L";
			}
			else if($bust <= 130) {
				$cup = "LL";
			}
			else if($bust <= 132) {
				$cup = "M";
			}
			else if($bust <= 135) {
				$cup = "MM";
			}
			else if($bust <= 137) {
				$cup = "N";
			}
			else {
				$cup = "Ô’";
				$band = "ò";
			}
		}

		if (($underbust >= 88) && ($underbust < 93)) {
			$band = "36"

			if ($bust <= 85) {
				$cup = "Ô’";
				$band = "ò";
			}
			else if ($bust <= 87) {
				$cup = "AAA";
			}
			else if($bust <= 90) {
				$cup = "AA";
			}
			else if($bust <= 92) {
				$cup = "A";            
			}
			else if($bust <= 95) {
				$cup = "B";
			}
			else if($bust <= 97) {
				$cup = "C";
			}
			else if($bust <= 100) {
				$cup = "D";
			}
			else if($bust <= 102) {
				$cup = "DD";
			}
			else if($bust <= 105) {
				$cup = "E";
			}
			else if($bust <= 107) {
				$cup = "F";
			}
			else if($bust <= 110) {
				$cup = "FF";
			}
			else if($bust <= 112) {
				$cup = "G";
			}
			else if($bust <= 115) {
				$cup = "GG";
			}
			else if($bust <= 117) {
				$cup = "H";
			}
			else if($bust <= 120) {
				$cup = "HH";
			}
			else if($bust <= 122) {
				$cup = "J";
			}
			else if($bust <= 125) {
				$cup = "JJ";
			}
			else if($bust <= 127) {
				$cup = "K";
			}
			else if($bust <= 130) {
				$cup = "KK";
			}
			else if($bust <= 132) {
				$cup = "L";
			}
			else if($bust <= 135) {
				$cup = "LL";
			}
			else if($bust <= 137) {
				$cup = "M";
			}
			else if($bust <= 140) {
				$cup = "MM";
			}
			else if($bust <= 142) {
				$cup = "N";
			}
			else {
				$cup = "Ô’";
				$band = "ò";
			}
		}

		if (($underbust >= 93) && ($underbust < 98)) {
			$band = "38"

			if ($bust <= 90) {
				$cup = "Ô’";
				$band = "ò";
			}
			else if ($bust <= 92) {
				$cup = "AAA";
			}
			else if($bust <= 95) {
				$cup = "AA";
			}
			else if($bust <= 97) {
				$cup = "A";            
			}
			else if($bust <= 100) {
				$cup = "B";
			}
			else if($bust <= 102) {
				$cup = "C";
			}
			else if($bust <= 105) {
				$cup = "D";
			}
			else if($bust <= 107) {
				$cup = "DD";
			}
			else if($bust <= 110) {
				$cup = "E";
			}
			else if($bust <= 112) {
				$cup = "F";
			}
			else if($bust <= 115) {
				$cup = "FF";
			}
			else if($bust <= 117) {
				$cup = "G";
			}
			else if($bust <= 120) {
				$cup = "GG";
			}
			else if($bust <= 122) {
				$cup = "H";
			}
			else if($bust <= 125) {
				$cup = "HH";
			}
			else if($bust <= 127) {
				$cup = "J";
			}
			else if($bust <= 130) {
				$cup = "JJ";
			}
			else if($bust <= 132) {
				$cup = "K";
			}
			else if($bust <= 135) {
				$cup = "KK";
			}
			else if($bust <= 137) {
				$cup = "L";
			}
			else if($bust <= 140) {
				$cup = "LL";
			}
			else if($bust <= 142) {
				$cup = "M";
			}
			else if($bust <= 145) {
				$cup = "MM";
			}
			else if($bust <= 147) {
				$cup = "N";
			}
			else {
				$cup = "Ô’";
				$band = "ò";
			}
		}

		if (($underbust >= 98) && ($underbust < 103)) {
			$band = "40"

			if ($bust <= 95) {
				$cup = "Ô’";
				$band = "ò";
			}
			else if ($bust <= 97) {
				$cup = "AAA";
			}
			else if($bust <= 100) {
				$cup = "AA";
			}
			else if($bust <= 102) {
				$cup = "A";            
			}
			else if($bust <= 105) {
				$cup = "B";
			}
			else if($bust <= 107) {
				$cup = "C";
			}
			else if($bust <= 110) {
				$cup = "D";
			}
			else if($bust <= 112) {
				$cup = "DD";
			}
			else if($bust <= 115) {
				$cup = "E";
			}
			else if($bust <= 117) {
				$cup = "F";
			}
			else if($bust <= 120) {
				$cup = "FF";
			}
			else if($bust <= 122) {
				$cup = "G";
			}
			else if($bust <= 125) {
				$cup = "GG";
			}
			else if($bust <= 127) {
				$cup = "H";
			}
			else if($bust <= 130) {
				$cup = "HH";
			}
			else if($bust <= 132) {
				$cup = "J";
			}
			else if($bust <= 135) {
				$cup = "JJ";
			}
			else if($bust <= 137) {
				$cup = "K";
			}
			else if($bust <= 140) {
				$cup = "KK";
			}
			else if($bust <= 142) {
				$cup = "L";
			}
			else if($bust <= 145) {
				$cup = "LL";
			}
			else if($bust <= 147) {
				$cup = "M";
			}
			else if($bust <= 150) {
				$cup = "MM";
			}
			else if($bust <= 152) {
				$cup = "N";
			}
			else {
				$cup = "Ô’";
				$band = "ò";
			}
		}

		if (($underbust >= 103) && ($underbust < 108)) {
			$band = "42"

			if ($bust <= 100) {
				$cup = "Ô’";
				$band = "ò";
			}
			else if ($bust <= 102) {
				$cup = "AAA";
			}
			else if($bust <= 105) {
				$cup = "AA";
			}
			else if($bust <= 107) {
				$cup = "A";            
			}
			else if($bust <= 110) {
				$cup = "B";
			}
			else if($bust <= 112) {
				$cup = "C";
			}
			else if($bust <= 115) {
				$cup = "D";
			}
			else if($bust <= 117) {
				$cup = "DD";
			}
			else if($bust <= 120) {
				$cup = "E";
			}
			else if($bust <= 122) {
				$cup = "F";
			}
			else if($bust <= 125) {
				$cup = "FF";
			}
			else if($bust <= 127) {
				$cup = "G";
			}
			else if($bust <= 130) {
				$cup = "GG";
			}
			else if($bust <= 132) {
				$cup = "H";
			}
			else if($bust <= 135) {
				$cup = "HH";
			}
			else if($bust <= 137) {
				$cup = "J";
			}
			else if($bust <= 140) {
				$cup = "JJ";
			}
			else if($bust <= 142) {
				$cup = "K";
			}
			else if($bust <= 145) {
				$cup = "KK";
			}
			else if($bust <= 147) {
				$cup = "L";
			}
			else if($bust <= 150) {
				$cup = "LL";
			}
			else if($bust <= 152) {
				$cup = "M";
			}
			else if($bust <= 155) {
				$cup = "MM";
			}
			else if($bust <= 157) {
				$cup = "N";
			}
			else {
				$cup = "Ô’";
				$band = "ò";
			}
		}

		if (($underbust >= 108) && ($underbust < 113)) {
			$band = "44"

			if ($bust <= 105) {
				$cup = "Ô’";
				$band = "ò";
			}
			else if ($bust <= 107) {
				$cup = "AAA";
			}
			else if($bust <= 110) {
				$cup = "AA";
			}
			else if($bust <= 112) {
				$cup = "A";            
			}
			else if($bust <= 115) {
				$cup = "B";
			}
			else if($bust <= 117) {
				$cup = "C";
			}
			else if($bust <= 120) {
				$cup = "D";
			}
			else if($bust <= 122) {
				$cup = "DD";
			}
			else if($bust <= 125) {
				$cup = "E";
			}
			else if($bust <= 127) {
				$cup = "F";
			}
			else if($bust <= 130) {
				$cup = "FF";
			}
			else if($bust <= 132) {
				$cup = "G";
			}
			else if($bust <= 135) {
				$cup = "GG";
			}
			else if($bust <= 137) {
				$cup = "H";
			}
			else if($bust <= 140) {
				$cup = "HH";
			}
			else if($bust <= 142) {
				$cup = "J";
			}
			else if($bust <= 145) {
				$cup = "JJ";
			}
			else if($bust <= 147) {
				$cup = "K";
			}
			else if($bust <= 150) {
				$cup = "KK";
			}
			else if($bust <= 152) {
				$cup = "L";
			}
			else if($bust <= 155) {
				$cup = "LL";
			}
			else if($bust <= 157) {
				$cup = "M";
			}
			else if($bust <= 160) {
				$cup = "MM";
			}
			else if($bust <= 162) {
				$cup = "N";
			}
			else {
				$cup = "Ô’";
				$band = "ò";
			}
		}

		if (($underbust >= 113) && ($underbust < 118)) {
			$band = "46"

			if ($bust <= 110) {
				$cup = "Ô’";
				$band = "ò";
			}
			else if ($bust <= 112) {
				$cup = "AAA";
			}
			else if($bust <= 115) {
				$cup = "AA";
			}
			else if($bust <= 117) {
				$cup = "A";            
			}
			else if($bust <= 120) {
				$cup = "B";
			}
			else if($bust <= 122) {
				$cup = "C";
			}
			else if($bust <= 125) {
				$cup = "D";
			}
			else if($bust <= 127) {
				$cup = "DD";
			}
			else if($bust <= 130) {
				$cup = "E";
			}
			else if($bust <= 132) {
				$cup = "F";
			}
			else if($bust <= 135) {
				$cup = "FF";
			}
			else if($bust <= 137) {
				$cup = "G";
			}
			else if($bust <= 140) {
				$cup = "GG";
			}
			else if($bust <= 142) {
				$cup = "H";
			}
			else if($bust <= 145) {
				$cup = "HH";
			}
			else if($bust <= 147) {
				$cup = "J";
			}
			else if($bust <= 150) {
				$cup = "JJ";
			}
			else if($bust <= 152) {
				$cup = "K";
			}
			else if($bust <= 155) {
				$cup = "KK";
			}
			else if($bust <= 157) {
				$cup = "L";
			}
			else if($bust <= 160) {
				$cup = "LL";
			}
			else if($bust <= 162) {
				$cup = "M";
			}
			else if($bust <= 165) {
				$cup = "MM";
			}
			else if($bust <= 167) {
				$cup = "N";
			}
			else {
				$cup = "Ô’";
				$band = "ò";
			}
		}

		if (($underbust >= 118) && ($underbust < 123)) {
			$band = "46"

			if ($bust <= 110) {
				$cup = "Ô’";
				$band = "ò";
			}
			else if ($bust <= 112) {
				$cup = "AAA";
			}
			else if($bust <= 115) {
				$cup = "AA";
			}
			else if($bust <= 117) {
				$cup = "A";            
			}
			else if($bust <= 120) {
				$cup = "B";
			}
			else if($bust <= 122) {
				$cup = "C";
			}
			else if($bust <= 125) {
				$cup = "D";
			}
			else if($bust <= 127) {
				$cup = "DD";
			}
			else if($bust <= 130) {
				$cup = "E";
			}
			else if($bust <= 132) {
				$cup = "F";
			}
			else if($bust <= 135) {
				$cup = "FF";
			}
			else if($bust <= 137) {
				$cup = "G";
			}
			else if($bust <= 140) {
				$cup = "GG";
			}
			else if($bust <= 142) {
				$cup = "H";
			}
			else if($bust <= 145) {
				$cup = "HH";
			}
			else if($bust <= 147) {
				$cup = "J";
			}
			else if($bust <= 150) {
				$cup = "JJ";
			}
			else if($bust <= 152) {
				$cup = "K";
			}
			else if($bust <= 155) {
				$cup = "KK";
			}
			else if($bust <= 157) {
				$cup = "L";
			}
			else if($bust <= 160) {
				$cup = "LL";
			}
			else if($bust <= 162) {
				$cup = "M";
			}
			else if($bust <= 165) {
				$cup = "MM";
			}
			else if($bust <= 167) {
				$cup = "N";
			}
			else {
				$cup = "Ô’";
				$band = "ò";
			}
		}

		if (($underbust >= 123) && ($underbust < 128)) {
			$band = "48"

			if ($bust <= 115) {
				$cup = "Ô’";
				$band = "ò";
			}
			else if ($bust <= 117) {
				$cup = "AAA";
			}
			else if($bust <= 120) {
				$cup = "AA";
			}
			else if($bust <= 122) {
				$cup = "A";            
			}
			else if($bust <= 125) {
				$cup = "B";
			}
			else if($bust <= 127) {
				$cup = "C";
			}
			else if($bust <= 130) {
				$cup = "D";
			}
			else if($bust <= 132) {
				$cup = "DD";
			}
			else if($bust <= 135) {
				$cup = "E";
			}
			else if($bust <= 137) {
				$cup = "F";
			}
			else if($bust <= 140) {
				$cup = "FF";
			}
			else if($bust <= 142) {
				$cup = "G";
			}
			else if($bust <= 145) {
				$cup = "GG";
			}
			else if($bust <= 147) {
				$cup = "H";
			}
			else if($bust <= 150) {
				$cup = "HH";
			}
			else if($bust <= 152) {
				$cup = "J";
			}
			else if($bust <= 155) {
				$cup = "JJ";
			}
			else if($bust <= 157) {
				$cup = "K";
			}
			else if($bust <= 160) {
				$cup = "KK";
			}
			else if($bust <= 162) {
				$cup = "L";
			}
			else if($bust <= 165) {
				$cup = "LL";
			}
			else if($bust <= 167) {
				$cup = "M";
			}
			else if($bust <= 170) {
				$cup = "MM";
			}
			else if($bust <= 172) {
				$cup = "N";
			}
			else {
				$cup = "Ô’";
				$band = "ò";
			}
		}

		if (($underbust >= 128) && ($underbust < 133)) {
			$band = "50"

			if ($bust <= 120) {
				$cup = "Ô’";
				$band = "ò";
			}
			else if ($bust <= 122) {
				$cup = "AAA";
			}
			else if($bust <= 125) {
				$cup = "AA";
			}
			else if($bust <= 127) {
				$cup = "A";            
			}
			else if($bust <= 130) {
				$cup = "B";
			}
			else if($bust <= 132) {
				$cup = "C";
			}
			else if($bust <= 135) {
				$cup = "D";
			}
			else if($bust <= 137) {
				$cup = "DD";
			}
			else if($bust <= 140) {
				$cup = "E";
			}
			else if($bust <= 142) {
				$cup = "F";
			}
			else if($bust <= 145) {
				$cup = "FF";
			}
			else if($bust <= 147) {
				$cup = "G";
			}
			else if($bust <= 150) {
				$cup = "GG";
			}
			else if($bust <= 152) {
				$cup = "H";
			}
			else if($bust <= 155) {
				$cup = "HH";
			}
			else if($bust <= 157) {
				$cup = "J";
			}
			else if($bust <= 160) {
				$cup = "JJ";
			}
			else if($bust <= 162) {
				$cup = "K";
			}
			else if($bust <= 165) {
				$cup = "KK";
			}
			else if($bust <= 167) {
				$cup = "L";
			}
			else if($bust <= 170) {
				$cup = "LL";
			}
			else if($bust <= 172) {
				$cup = "M";
			}
			else if($bust <= 175) {
				$cup = "MM";
			}
			else if($bust <= 177) {
				$cup = "N";
			}
			else {
				$cup = "Ô’";
				$band = "ò";
			}
		}

		if (($underbust >= 128) && ($underbust < 133)) {
			$band = "52"

			if ($bust <= 125) {
				$cup = "Ô’";
				$band = "ò";
			}
			else if ($bust <= 127) {
				$cup = "AAA";
			}
			else if($bust <= 130) {
				$cup = "AA";
			}
			else if($bust <= 132) {
				$cup = "A";            
			}
			else if($bust <= 135) {
				$cup = "B";
			}
			else if($bust <= 137) {
				$cup = "C";
			}
			else if($bust <= 140) {
				$cup = "D";
			}
			else if($bust <= 142) {
				$cup = "DD";
			}
			else if($bust <= 145) {
				$cup = "E";
			}
			else if($bust <= 147) {
				$cup = "F";
			}
			else if($bust <= 150) {
				$cup = "FF";
			}
			else if($bust <= 152) {
				$cup = "G";
			}
			else if($bust <= 155) {
				$cup = "GG";
			}
			else if($bust <= 157) {
				$cup = "H";
			}
			else if($bust <= 160) {
				$cup = "HH";
			}
			else if($bust <= 162) {
				$cup = "J";
			}
			else if($bust <= 165) {
				$cup = "JJ";
			}
			else if($bust <= 167) {
				$cup = "K";
			}
			else if($bust <= 170) {
				$cup = "KK";
			}
			else if($bust <= 172) {
				$cup = "L";
			}
			else if($bust <= 175) {
				$cup = "LL";
			}
			else if($bust <= 177) {
				$cup = "M";
			}
			else if($bust <= 180) {
				$cup = "MM";
			}
			else if($bust <= 182) {
				$cup = "N";
			}
			else {
				$cup = "Ô’";
				$band = "ò";
			}
		}

	$("#ukSize").html("<small>UK</small> "+ $band +" "+ $cup +"");
	});
});
