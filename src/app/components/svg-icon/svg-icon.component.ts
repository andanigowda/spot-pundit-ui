import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent implements OnInit {
  svgIconUrl = '../assets/img/svg_icons/';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'star',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${this.svgIconUrl}star.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'half-star',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${this.svgIconUrl}half-star.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'bookmark',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${this.svgIconUrl}bookmark.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'un-bookmark',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${this.svgIconUrl}un-bookmark.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'play',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${this.svgIconUrl}play.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'pause',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${this.svgIconUrl}pause.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'next',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${this.svgIconUrl}next.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'prev',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${this.svgIconUrl}prev.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'facebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${this.svgIconUrl}facebook.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${this.svgIconUrl}linkedin.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${this.svgIconUrl}instagram.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'pinterest',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${this.svgIconUrl}pinterest.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'elephant-left',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${this.svgIconUrl}elephant-left.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'elephant-right',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${this.svgIconUrl}elephant-right.svg`
      )
    );

    this.matIconRegistry.addSvgIcon(
      'user-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${this.svgIconUrl}user-icon.svg`
      )
    );

    this.matIconRegistry.addSvgIcon(
      'mail',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${this.svgIconUrl}mail.svg`
      )
    );

    this.matIconRegistry.addSvgIcon(
      'testimonial-star1',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${this.svgIconUrl}testimonial-star1.svg`
      )
    );

    this.matIconRegistry.addSvgIcon('testimonial-star', this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.svgIconUrl}testimonial-star.svg`));
    this.matIconRegistry.addSvgIcon('accessibility', this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.svgIconUrl}accessibility.svg`));
    this.matIconRegistry.addSvgIcon('efficiency', this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.svgIconUrl}efficiency.svg`));
    this.matIconRegistry.addSvgIcon('knowledge', this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.svgIconUrl}knowledge-transfer.svg`));
    this.matIconRegistry.addSvgIcon('reliable', this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.svgIconUrl}reliable.svg`));
  }

  ngOnInit(): void { }
}
